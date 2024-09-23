import { useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TabDefault } from '@/store/common';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { AddArticleEditor } from './components/add-article';
import TableArticle from './components/article/TableArticle';
import ProductAdmin from './components/product';
// import TableQuestion from './components/question/TableQuestion';
import TableStoke from './components/stoke/TableStoke';
import UserAdmin from './components/user';

// function extractEmails(text) {
//   return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
// }

const tabList = [
  {
    path: 'stoke',
    title: 'Stoke',
    element: <TableStoke />,
  },
  {
    path: 'article',
    title: 'Article',
    element: <TableArticle />,
  },
  // {
  //   path: 'question',
  //   title: 'Question',
  //   element: <TableQuestion />,
  // },
  {
    path: 'add-article',
    title: 'Add Article',
    element: <AddArticleEditor />,
  },
  {
    path: 'product',
    title: 'Product',
    element: <ProductAdmin />,
  },
];

function Admin() {
  const cookie = useCookies(['roles']);
  const navigate = useNavigate();

  const [tabDefault, setTabDefault] = useRecoilState(TabDefault);

  useEffect(() => {
    cookie[0].roles.includes('ROLE_MODERATOR_USER') ? onTabChange('user') : onTabChange('stoke');
  }, []);

  const onTabChange = (value) => {
    setTabDefault(value);
    navigate('/admin');
  };

  return (
    <div className="container w-[80%] mx-auto pt-6">
      <Tabs value={tabDefault} onValueChange={onTabChange} className="w-full">
        <TabsList>
          {(cookie[0].roles.includes('ROLE_MODERATOR_USER') ||
            cookie[0].roles.includes('ROLE_ADMIN')) && <TabsTrigger value="user">User</TabsTrigger>}
          {(cookie[0].roles.includes('ROLE_MODERATOR_ARTICLE') ||
            cookie[0].roles.includes('ROLE_ADMIN')) &&
            tabList.map((e) => (
              <TabsTrigger key={e.path} value={e.path}>
                {e.title}
              </TabsTrigger>
            ))}
        </TabsList>

        {(cookie[0].roles.includes('ROLE_MODERATOR_USER') ||
          cookie[0].roles.includes('ROLE_ADMIN')) && (
            <TabsContent value="user">
              <UserAdmin />
            </TabsContent>
          )}

        {(cookie[0].roles.includes('ROLE_MODERATOR_ARTICLE') ||
          cookie[0].roles.includes('ROLE_ADMIN')) &&
          tabList.map((e) => (
            <TabsContent key={e.path} value={e.path}>
              {e.element}
            </TabsContent>
          ))}
      </Tabs>
    </div>
  );
}

export default Admin;

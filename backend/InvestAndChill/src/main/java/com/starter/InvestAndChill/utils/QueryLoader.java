package com.starter.InvestAndChill.utils;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

public class QueryLoader {
	private Map<String, String> queries = new HashMap<>();

    public QueryLoader() {
        loadQueries();
    }

    private void loadQueries() {
        try {
            // Đọc file XML từ classpath
            InputStream is = getClass().getClassLoader().getResourceAsStream("queries.xml");
            if (is == null) {
                throw new RuntimeException("Không tìm thấy file queries.xml");
            }
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();
            Document doc = builder.parse(is);
            doc.getDocumentElement().normalize();

            NodeList nodeList = doc.getElementsByTagName("query");
            for (int i = 0; i < nodeList.getLength(); i++) {
                Element queryElement = (Element) nodeList.item(i);
                String id = queryElement.getAttribute("id");
                String sql = queryElement.getTextContent().trim();
                queries.put(id, sql);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public String getQuery(String id) {
        return queries.get(id);
    }
}

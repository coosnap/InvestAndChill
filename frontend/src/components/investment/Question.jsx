const questionData = [
  { id: '1', question: 'Điểm nổi bật của sản phẩm là gì?', content: 'Khách hàng được tiếp cận và tìm hiểu thông tin đầy đủ, chính xác về cơ hội đầu tư.' },
  { id: '2', question: 'Khi muốn đầu tư khách hàng cần phải làm gì?', content: 'Khách hàng có nhu cầu đầu tư có thể liên hệ.' },
  { id: '3', question: 'Có nên đầu tư không?', content: 'Đây là công cụ đầu tư an toàn và hợp pháp tại Việt Nam. Bạn chỉ nên đầu tư vào khi có nguồn tài chính tốt và chỉ nên đầu tư dài hạn để an toàn và đạt hiệu quả cao nhất.' },
  { id: '4', question: 'Đầu tư có rút tiền được không?', content: 'Bạn có thể bán lại chứng chỉ quỹ và rút tiền vào bất kỳ lúc nào bạn ngừng đầu tư.' },
]

function Question() {
  return (
    <div className="h-[100vh] px-10 py-10 bg-[#FCFDFE]">
      <div className="mt-8 mb-12">
        <h2 className="text-3xl text-center text-[#232A46] font-semibold">FAQs - Câu hỏi thường gặp</h2>
      </div>
      {questionData.map((e, index) =>
        <div key={e.id} className="mb-8 flex justify-center">
          <div className="w-1/2 p-4 border rounded-xl bg-[#232A46]">
            <div tabIndex={index} className="collapse collapse-plus">
              <div className="collapse-title text-white text-2xl font-semibold">
                {e.question}
              </div>
              <div className="collapse-content">
                <p className="text-white text-lg">{e.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;
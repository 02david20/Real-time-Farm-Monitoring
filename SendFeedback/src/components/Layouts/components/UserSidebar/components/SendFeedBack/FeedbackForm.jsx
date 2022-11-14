import "./FeedbackForm.css";
import FormInput from "./components/FormInput";
import { useState } from "react";

const FeedbackForm = (props) => {
  const [values, setValues] = useState({
    title: "",
    content: "",
  });

  const [sendFMessage, setSendFMessage] = useState(false);

  const handleSendClick = () => {
    props.setTrigger(false);
    setSendFMessage(true);
    setTimeout(() => {
      setSendFMessage(false);
    }, 1500);
  };

  const inputs = [
    {
      id: 1,
      name: "title",
      placeholder: "Tiêu Đề",
      label: "Tiêu Đề",
      required: true,
    },
    {
      id: 2,
      name: "content",
      placeholder: "Nội Dung",
      label: "Nội Dung",
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  return props.trigger ? (
    <div className="FeedbackForm">
      <form onSubmit={handleSubmit}>
        <h1>GÓP Ý</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button onClick={handleSendClick}>GỬI</button>
        <button
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          ĐÓNG
        </button>
      </form>
    </div>
  ) : sendFMessage ? (
    <div className="sendFMessage-container">
      <div className="sendFMessage-inner">Bạn đã gửi phản hồi thành công</div>
    </div>
  ) : (
    ""
  );
};

export default FeedbackForm;

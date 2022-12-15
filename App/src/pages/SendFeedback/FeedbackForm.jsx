import "./FeedbackForm.css";
import FormInput from "./components/FormInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FeedbackForm = (props) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: "",
    content: "",
  });
  const [submit, setSubmit] = useState([false, false]);
  const [sendFMessage, setSendFMessage] = useState(false);

  const navigateToHome = () => {
    navigate("/");
  };

  const showSendFMessage = () => {
    setSendFMessage(true);
    setTimeout(() => {
      setSendFMessage(false);
      setValues({title: "", content: ""});
      }, 1500);
  };

  const inputs = [
    {
      id: 1,
      name: "title",
      placeholder: "Tiêu Đề",
      label: "Tiêu Đề",
      required: true,
      maxLength: 100,
      errorMessage: `Tiêu đề không quá 100 ký tự`,
    },
    {
      id: 2,
      name: "content",
      placeholder: "Nội Dung",
      label: "Nội Dung",
      required: true,
      maxLength: 1000,
      errorMessage: `Nội dung không quá 1000 ký tự`,
    },
  ];

  const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (submit.every(e => e === true)) {
      showSendFMessage();
      const data = new FormData(e.target);
      console.log(Object.fromEntries(data.entries()));
    }
  };

  return (
    <div className="FeedbackForm">
      <form onSubmit={handleSubmit}>
        <h1>GÓP Ý</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            setSubmit={setSubmit}
            submit={submit}
          />
        ))}
        <button className="Left">GỬI</button>
        <button className="Right" type="button" onClick={navigateToHome}>ĐÓNG</button>
      </form> 
      {sendFMessage && 
        <div className="sendFMessage-container">
            <div className="sendFMessage-inner">Bạn đã gửi phản hồi thành công</div>
        </div>}
    </div>
    );
};

export default FeedbackForm;

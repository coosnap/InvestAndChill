import {useState} from "react";
import ReCAPTCHA from 'react-google-recaptcha'
import {RECAPTCHA_KEY} from "../config/config";

interface Props {
  onChanged?: (event) => void
}

export const ReCaptcha = (props: Props) => {
  // const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const onChanged = (event) => {
    console.log(event)

    if (props.onChanged) {
      props?.onChanged(event);
    }
  };

  return (
    <ReCAPTCHA sitekey={RECAPTCHA_KEY} // Replace with your actual site key
               onChange={onChanged}/>
  )
}

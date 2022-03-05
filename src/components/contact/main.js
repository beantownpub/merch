import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Icon } from "../elements/icons/main"
import { SubmitButton } from "../elements/buttons/main"
import { StyledContactForm } from "./styles"
import { config } from "../../utils/main"

const COLORS = config.colors

const contactReply = "Request Received! We will respond to you as soon as we can. Thanks!"

export const ContactForm = () => {
  const [reply, setReply] = useState("")
  const { handleSubmit, register, errors } = useForm()
  const heads = {
    "Content-Type": "application/json"
  }
  const onSubmit = (values, e) => {
    fetch("contact/send-message", {method: "POST", credentials: "include", body: JSON.stringify(values), headers: heads})
      .then(response => response.json())
      .then(data => setReply(data.msg))
      .catch(error => console.log(error))
    e.target.reset()
  }

  return (
    <StyledContactForm aria-labelledby="Contact form container">
      {reply &&
        <p>{reply}</p>
      }
      {reply != contactReply &&
        <div>
          <h2>
          <Icon
            style={{fontSize: '1rem', margin: 'auto'}}
            iconName={'faEnvelope'}
          /> Request Info
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="name"
              placeholder="Name"
              ref={register({ required: "Required"})}
            />
            <h3>{errors.name && errors.name.message}</h3>
            <input
              name="email"
              placeholder="Email"
              ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address"
              }
              })}
            />
            <h3>{errors.email && errors.email.message}</h3>
            <input
              name="phone"
              placeholder="Phone"
              ref={register({ required: "Required"})}
            />
            <h3>{errors.phone && errors.phone.message}</h3>
            <textarea
              name="details"
              rows="6"
              columns="50"
              placeholder="Details"
              ref={register({ required: "Required"})}
            ></textarea>
            <h3>{errors.details && errors.details.message}</h3>
            <label htmlFor="catering">Interested in having your event catered? Check box if so</label>
            <input
              name="catering"
              type="checkbox"
              value="Yes"
              ref={register()}
            />
            <br />
            <SubmitButton
              buttonText="Submit"
              textColor={COLORS.black}
              hoverBackgroundColor={COLORS.black}
              hoverTextColor={COLORS.white}
            />
          </form>
        </div>
      }
    </StyledContactForm>
  )
}

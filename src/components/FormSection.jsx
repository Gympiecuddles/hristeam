import React from 'react'
import styled from 'styled-components'

import MiniForm from './MiniForm'

const ServiceBox4 = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 78vh;
  width: 100%;
  background-color: #000000;
  article {
    display: flex;
    width: 52%;
    height: 90%;
    span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 60px;
      width: 50%;
      color: #ffffff;
      h3 {
        font-size: 4.2em;
      }
      p {
        margin-top: 20px;
        font-size: 1.9em;
      }
      i {
        margin-top: 90px;
        font-size: 1.4em;
        font-weight: 500;
      }
      b {
        margin-top: 45px;
        font-size: 1.3em;
        font-weight: 500;
        p {
          margin-top: 10px ;
          font-size: .7em;
          color: #dadada;
        }
      }
    }
    div {
      margin: 50px;
    }
  }
`;

export default function FormSection() {
  return (
    <ServiceBox4>
        <article>
          <span>
            <h3>Let’s Make Things Happen</h3>
            <p>To speak with one of our team members about our consulting, training, or investigative services or to register for one of our upcoming training programs, contact us today.</p>
            <i>“Thank you so much for the wonderful, custom program you developed for our Ethics team. It was so great that several team members have come up to me recently to say they have watched the recording of the investigations training at least 3 times to go back for more learning. We look forward to working together again on a project in the future!”</i>
            <b>Martha Fowler<p>President & CEO</p></b>
          </span>
          <div>
            <MiniForm />
          </div>  
        </article>
    </ServiceBox4>
  )
}

import React from "react"

type PhoneMockupProps = {
  children: React.ReactNode
}

const PhoneMockup = ({ children }: PhoneMockupProps) => {
  return (
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">
        <div className="phone-1 artboard artboard-demo">{children}</div>
      </div>
    </div>
  )
}

export default PhoneMockup

import React, { JSX } from "react"

export const HomeScreen: React.FC<{}> = (): JSX.Element => {
    return <>
        <div className="home-base-content">
            <div className="base-content">
                <div className="base-top">
                    <div className="description">
                        <h1>Reliable Accouting and Bookkeeping Solutions</h1>
                        <p>We provide professional accounting, book keeping and financial servicesto help your business succeed.</p>
                    </div>
                    <div className="services-desc">
                        <div className="accounting" style={{ border: "2px solid #ffffff", padding: 10 }}>
                            <span>ACCOUNTING</span>
                        </div>
                        <div className="bookkeeping" style={{ border: "2px solid #ffffff", padding: 10 }}>
                            <span>BOOKKEEPING</span>
                        </div>
                        <div className="tax-services" style={{ border: "2px solid #ffffff", padding: 10 }}>
                            <span>TAX SERVICES</span>
                        </div>
                    </div>
                </div>

                <div className="app-btn-grey app-btn">
                    <span>Our services</span>
                </div>
            </div>
        </div>
    </>
}
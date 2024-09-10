"use client"
import { type ReactNode } from "react"

export const LegalPage = (props: { title: string; effectiveDate: Date; children: ReactNode }) => {
    return (
            <div>
                <div>
                    <h1>{props.title}</h1>
                    <h4>
                        <span>Effective date: </span>
                        <span>
                            {props.effectiveDate.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })}
                        </span>
                    </h4>
                </div>
                <section>{props.children}</section>
            </div>
    )
}

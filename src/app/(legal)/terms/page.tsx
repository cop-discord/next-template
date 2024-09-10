import { type Metadata } from "next"
import { metadata as rootMetaData } from "@/app/layout"
import { LegalPage } from "../LegalPage"

export const metadata: Metadata = {
    title: "Terms Policy",
    ...rootMetaData
}

export default function Page() {
    return (
        <LegalPage title="Terms Policy" effectiveDate={new Date("September 10, 2024 1:54 PM EST")}>
            <></>
        </LegalPage>
    )
}

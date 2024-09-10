import { type Metadata } from "next"
import { metadata as rootMetaData } from "@/app/layout"
import { LegalPage } from "../LegalPage"

export const metadata: Metadata = {
    title: "Privacy Policy",
    ...rootMetaData
}

export default function Page() {
    return (
        <LegalPage title="Privacy Policy" effectiveDate={new Date("September 10, 2024 1:54 PM EST")}>
            <>
                <div>
                    <h1>
    Gay Bot Policy
    Introduction

    This policy is designed to ensure a safe and respectful environment for all users interacting with our Discord bot. By using the bot, you agree to comply with this policy.
    Policy Details

        Compliance with Discord Terms of Service:
            All users must adhere to Discord's Terms of Service (ToS). Any violation of Discord's ToS while using this bot will result in immediate action.

        Prohibited Actions:
            Abuse of the Bot: Any form of abuse, including but not limited to spam, harassment, and exploitation of the bot's features, is strictly prohibited.
            Malicious Behavior: Any attempt to harm, manipulate, or exploit the bot or its users will not be tolerated.

        Consequences:
            Blacklisting: Users found violating this policy will be blacklisted. Blacklisted users will lose access to the bot and its features permanently.
            Bot Removal: If the bot is abused or Discord's ToS are violated within a server, the bot will be removed from that server without prior notice.

        Reporting Violations:
            Users are encouraged to report any violations of this policy to the bot administrators.
                    </h1>
                </div>
            </>
        </LegalPage>
    )
}

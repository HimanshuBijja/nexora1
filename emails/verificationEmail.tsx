import * as React from 'react';
import {
    Body,
    Container,
    Font,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    Row,
    Section,
    Text,
} from "@react-email/components";

export default function VerificationEmail({
    username,
    otp,
}: {
    username: string;
    otp: string;
}) {
    return (
        <Html>
            <Head>
                <title>Verification Email</title>
                <Font
                    fontFamily="Inter"
                    fontWeight={400}
                    fontStyle="normal"
                    fallbackFontFamily="Arial"
                />
            </Head>
            <Preview>Here is your verification code {otp}</Preview>
            <Section>
                <Row>
                    {" "}
                    <Heading as="h2">Hello {username}</Heading>
                </Row>
                <Row>
                    {" "}
                    <Text>
                        <Link href="https://github.com/HimanshuBijja?tab=overview&from=2025-07-01&to=2025-07-20">Verify</Link>
                        Thank you for signing up. Please use the following code
                        to verification code to complete your registration.
                    </Text>
                </Row>
                <Row>
                    <Text>{otp}</Text>
                </Row>
                <Row>
                    <Text>If you didnt send this email please ignore.</Text>
                </Row>
            </Section>
        </Html>
    );
}

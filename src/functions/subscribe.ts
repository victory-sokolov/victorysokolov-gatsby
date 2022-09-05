import fetch from "node-fetch";

export default async function handler(event, context) {
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    const body = JSON.parse(event.body);
    const { email_address, merge_fields } = body;

    if (!email_address) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Please provide a valid email address" })
        };
    }

    try {
        const payload = {
            email_address,
            merge_fields,
            status: "subscribed"
        };

        const response = await fetch(`https://us17.api.mailchimp.com/3.0/list`, {
            method: "POST",
            headers: {
                Authorization: `Basic ${MAILCHIMP_API_KEY}`
            },
            body: JSON.stringify(payload)
        });

        return {
            statusCode: 200,
            body: JSON.stringify(response)
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        };
    }
}

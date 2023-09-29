import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
    const recaptchaToken = request.nextUrl.searchParams.get('recaptcha-token');
    const recaptchaSecret = process.env.RECAPTCHA_SECRET;

    if (recaptchaToken === null || recaptchaSecret === undefined) return NextResponse.next({ status: 400 });

    const formData = new FormData();

    formData.append('secret', recaptchaSecret);
    formData.append('response', recaptchaToken);

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        body: formData,
        method: 'post'
    });

    const { success } = await response.json();

    if (!success)
        return NextResponse.json(
            {
                location: 'Not today,',
                phone: 'robots!',
                email: ''
            },
            {
                status: 403
            }
        );

    return NextResponse.json({
        location: 'Emmen, Drenthe, NL',
        phone: '+31 6 48744406',
        email: 'post@julianvos.nl'
    });
}

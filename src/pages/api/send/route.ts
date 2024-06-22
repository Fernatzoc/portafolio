import { EmailTemplate } from '../../../app/[locale]/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend('re_YurW5ZW2_9L9FpxgBS3eAYUrvRkFMmCpc');

const POST = async (req: any, res: any) => {
    try {
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['fernandotzoc4@gmail.com'],
            subject: 'Hello world',
            react: EmailTemplate({ firstName: 'John' }),
            text: '',
        });

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error });
    }
}

export default POST;
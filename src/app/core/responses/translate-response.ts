export interface TranslationResponse {
    responseData: ResponseData;
    quotaFinished: boolean;
    mtLangSupported: any | null;
    responseDetails: string;
    responseStatus: number;
    responderId: string | null;
    exception_code: number | null;
    matches: Match[];
}

interface ResponseData {
    translatedText: string;
    match: number;
}

interface Match {
    id: string;
    segment: string;
    translation: string;
    source: string;
    target: string;
    quality: number;
    reference: string | null;
    "usage-count": number;
    subject: string;
    "created-by": string;
    "last-updated-by": string;
    "create-date": string;
    "last-update-date": string;
    match: number;
    penalty: number;
}
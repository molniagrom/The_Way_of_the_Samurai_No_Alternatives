
// Тип для вложения (например, ссылка на файл)
export type Attachment = {
    url: string;
};

// Тип для атрибутов трека (название и список вложений)
export type TrackAttributes = {
    title: string;
    attachments: Attachment[];
};

// Основной тип для трека, включающий ID и атрибуты
export type Track = {
    id: string;
    attributes: TrackAttributes;
};

export type TrackDetailsResource = {
    id: string;
    attributes: TrackDetailsAttributes;
};

export type TrackDetailsAttributes = {
    title: string;
    lyrics: string | null;
    attachments: Attachment[];
};

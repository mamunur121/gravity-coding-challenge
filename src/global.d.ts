type Item = {
    published_date: string;
    level: string;
    title: string;
    body: string;
    categories: string[];
    url_action: {
        url: string;
        title: string;
    }[];
    url_explanation: {
        url: string;
        title: string;
    }[];
    id: string;
}

type Filter = "all" | "only_0" | "only_1" | "only_2";

type Level = "0" | "1" | "2";
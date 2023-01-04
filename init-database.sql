CREATE TABLE IF NOT EXISTS public.tinyurl (
    url_id serial NOT NULL,
    long_url VARCHAR(512),
    short_code VARCHAR(64),
    CONSTRAINT tinyurl_pkey PRIMARY KEY (url_id)
);

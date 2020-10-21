
CREATE TABLE public.rendafamiliar
(
    id character varying(1) COLLATE pg_catalog."default",
    faixa character varying(35) COLLATE pg_catalog."default",
    valor integer
)

TABLESPACE pg_default;

ALTER TABLE public.rendafamiliar
    OWNER to postgres;

CREATE UNIQUE INDEX "idRenda"
    ON public.rendafamiliar USING btree
    (id COLLATE pg_catalog."default" ASC NULLS LAST)
    TABLESPACE pg_default;
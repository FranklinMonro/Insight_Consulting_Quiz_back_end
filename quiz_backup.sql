--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3 (Debian 15.3-1.pgdg120+1)
-- Dumped by pg_dump version 15.3

-- Started on 2023-07-25 13:38:51 UTC

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE postgres;
--
-- TOC entry 3369 (class 1262 OID 5)
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3370 (class 0 OID 0)
-- Dependencies: 3369
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 16431)
-- Name: player_answers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.player_answers (
    id uuid NOT NULL,
    answer character(255) NOT NULL,
    is_correct boolean NOT NULL,
    date date NOT NULL
);


ALTER TABLE public.player_answers OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16426)
-- Name: questions_answers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.questions_answers (
    answer_id smallint NOT NULL,
    question_id smallint NOT NULL,
    quiz_id smallint NOT NULL,
    answer character(255) NOT NULL,
    is_correct boolean NOT NULL
);


ALTER TABLE public.questions_answers OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16408)
-- Name: quiz; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.quiz (
    quiz_id smallint NOT NULL,
    quiz_name character(255) NOT NULL
);


ALTER TABLE public.quiz OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16421)
-- Name: quiz_questions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.quiz_questions (
    question_id smallint NOT NULL,
    quiz_id smallint NOT NULL,
    questions character(255) NOT NULL
);


ALTER TABLE public.quiz_questions OWNER TO postgres;

--
-- TOC entry 3363 (class 0 OID 16431)
-- Dependencies: 217
-- Data for Name: player_answers; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3362 (class 0 OID 16426)
-- Dependencies: 216
-- Data for Name: questions_answers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (1, 1, 1, 'Rivers                                                                                                                                                                                                                                                         ', false);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (2, 1, 1, 'Waters                                                                                                                                                                                                                                                         ', false);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (3, 1, 1, 'Stone                                                                                                                                                                                                                                                          ', false);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (4, 1, 1, 'Sand                                                                                                                                                                                                                                                           ', true);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (5, 2, 1, 'Gerold Clegane                                                                                                                                                                                                                                                 ', false);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (6, 2, 1, 'Gregor Clegane                                                                                                                                                                                                                                                 ', true);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (7, 2, 1, 'Oberyn Martell                                                                                                                                                                                                                                                 ', false);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (8, 2, 1, 'Sandor Clegane                                                                                                                                                                                                                                                 ', false);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (9, 3, 1, 'Ser Barristan Selmy                                                                                                                                                                                                                                            ', true);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (10, 3, 1, 'Ser Loras Tyrell                                                                                                                                                                                                                                               ', false);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (11, 3, 1, 'Ser Jaime Lannister                                                                                                                                                                                                                                            ', false);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (12, 3, 1, 'Ser Jeor Mormont                                                                                                                                                                                                                                               ', false);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (13, 4, 1, 'Renly Baratheon                                                                                                                                                                                                                                                ', true);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (14, 4, 1, 'Joffrey Baratheon                                                                                                                                                                                                                                              ', false);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (15, 4, 1, 'Tommen Baratheon                                                                                                                                                                                                                                               ', false);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (16, 4, 1, 'Stannis Baratheon                                                                                                                                                                                                                                              ', false);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (17, 5, 1, 'Mance Rayder                                                                                                                                                                                                                                                   ', true);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (18, 5, 1, 'Tormund Giantsbane                                                                                                                                                                                                                                             ', false);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (19, 5, 1, 'Stannis Baratheon                                                                                                                                                                                                                                              ', false);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (20, 5, 1, 'The Night King                                                                                                                                                                                                                                                 ', false);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (21, 6, 2, 'Archibald                                                                                                                                                                                                                                                      ', false);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (22, 6, 2, 'Matthew                                                                                                                                                                                                                                                        ', false);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (23, 6, 2, 'Hartwell                                                                                                                                                                                                                                                       ', true);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (24, 7, 2, 'Narcissus                                                                                                                                                                                                                                                      ', false);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (25, 7, 2, 'Lily-of-the-valley                                                                                                                                                                                                                                             ', true);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (26, 7, 2, 'Black Nightshade                                                                                                                                                                                                                                               ', false);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (27, 8, 2, 'Drew Sharp                                                                                                                                                                                                                                                     ', true);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (28, 8, 2, 'David Stewart                                                                                                                                                                                                                                                  ', false);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (29, 8, 2, 'Donnie Solis                                                                                                                                                                                                                                                   ', false);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (33, 10, 2, 'Chili powder                                                                                                                                                                                                                                                   ', true);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (34, 10, 2, 'A1 Steal Sauce                                                                                                                                                                                                                                                 ', false);
INSERT INTO public.questions_answers (answer_id, question_id, quiz_id, answer, is_correct) VALUES (35, 10, 2, 'Oregano                                                                                                                                                                                                                                                        ', false);


--
-- TOC entry 3360 (class 0 OID 16408)
-- Dependencies: 214
-- Data for Name: quiz; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.quiz (quiz_id, quiz_name) VALUES (1, 'Game of Thrones                                                                                                                                                                                                                                                ');
INSERT INTO public.quiz (quiz_id, quiz_name) VALUES (2, 'Breaking Bad                                                                                                                                                                                                                                                   ');


--
-- TOC entry 3361 (class 0 OID 16421)
-- Dependencies: 215
-- Data for Name: quiz_questions; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.quiz_questions (question_id, quiz_id, questions) VALUES (1, 1, 'What is the surname given to bastards born in Dorne?                                                                                                                                                                                                           ');
INSERT INTO public.quiz_questions (question_id, quiz_id, questions) VALUES (2, 1, '"The Mountain" is the nickname for which character?                                                                                                                                                                                                            ');
INSERT INTO public.quiz_questions (question_id, quiz_id, questions) VALUES (3, 1, 'Who is Lord Commander of the Kingsguard at the beginning of Game of Thrones?                                                                                                                                                                                   ');
INSERT INTO public.quiz_questions (question_id, quiz_id, questions) VALUES (4, 1, 'Who was Margaery Tyrells first husband?                                                                                                                                                                                                                        ');
INSERT INTO public.quiz_questions (question_id, quiz_id, questions) VALUES (5, 1, 'Who is known as "The-King-Beyond-the-Wall"?                                                                                                                                                                                                                    ');
INSERT INTO public.quiz_questions (question_id, quiz_id, questions) VALUES (6, 2, 'What is Walt’s middle name?                                                                                                                                                                                                                                    ');
INSERT INTO public.quiz_questions (question_id, quiz_id, questions) VALUES (7, 2, 'What is the plant Walt used to poison Brock?                                                                                                                                                                                                                   ');
INSERT INTO public.quiz_questions (question_id, quiz_id, questions) VALUES (8, 2, 'What is the name of the boy Todd shot in the desert?                                                                                                                                                                                                           ');
INSERT INTO public.quiz_questions (question_id, quiz_id, questions) VALUES (9, 2, 'What is the model of Walt’s original car?                                                                                                                                                                                                                      ');
INSERT INTO public.quiz_questions (question_id, quiz_id, questions) VALUES (10, 2, 'Before becoming Walt’s partner, Jesse cooked his meth with what special ingredient?                                                                                                                                                                            ');


--
-- TOC entry 3217 (class 2606 OID 16435)
-- Name: player_answers player_answers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player_answers
    ADD CONSTRAINT player_answers_pkey PRIMARY KEY (id);


--
-- TOC entry 3215 (class 2606 OID 16430)
-- Name: questions_answers questions_answers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.questions_answers
    ADD CONSTRAINT questions_answers_pkey PRIMARY KEY (answer_id);


--
-- TOC entry 3211 (class 2606 OID 16412)
-- Name: quiz quiz_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz
    ADD CONSTRAINT quiz_pkey PRIMARY KEY (quiz_id);


--
-- TOC entry 3213 (class 2606 OID 16425)
-- Name: quiz_questions quiz_questions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quiz_questions
    ADD CONSTRAINT quiz_questions_pkey PRIMARY KEY (question_id);


-- Completed on 2023-07-25 13:38:51 UTC

--
-- PostgreSQL database dump complete
--


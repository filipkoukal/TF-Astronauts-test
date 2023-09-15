CREATE TABLE "Astronaut" (
    "id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR(20) NOT NULL,
	"last_name" VARCHAR(20) NOT NULL,
	"date_of_birth" DATE NOT NULL,
	"superpower" VARCHAR(200)
);

INSERT INTO "Astronaut" ("id", "first_name", "last_name", "date_of_birth", "superpower") VALUES
	('0', 'Pepa', 'Novák', '1992-01-10', 'Laser vision'),
	('1', 'Karel', 'Kadlec', '1983-06-23', 'Furry'),
	('2', 'Honza', 'Tichý', '2000-12-01', 'Femboy'),
	('3', 'Janek', 'Druhý', '1999-9-14', 'Can eat banana the long way ');


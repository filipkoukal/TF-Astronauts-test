CREATE TABLE "Astronaut" (
    "id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR(20) NOT NULL,
	"last_name" VARCHAR(20) NOT NULL,
	"date_of_birth" DATE NOT NULL,
	"superpower" VARCHAR(200),
	"createdAt" TIMESTAMP WITH TIME ZONE,
	"updatedAt" TIMESTAMP WITH TIME ZONE
);

INSERT INTO "Astronaut" ("id", "first_name", "last_name", "date_of_birth", "superpower", "createdAt", "updatedAt") VALUES
	('0', 'Pepa', 'Novák', '1992-01-10', 'Laser vision', NOW(), NOW()),
	('1', 'Karel', 'Kadlec', '1983-06-23', 'Super Jump', NOW(), NOW()),
	('2', 'Honza', 'Tichý', '2000-12-01', 'Invincibility', NOW(), NOW()),
	('3', 'Janek', 'Druhý', '1999-9-14', 'Can eat banana the long way', NOW(), NOW()),
	('4', 'Vladimír', 'Remek', '1968-09-25', 'First Czech Astronaut', NOW(), NOW()),
	('5', 'Jiří', 'Svoboda', '1977-01-27', 'Super Speed', NOW(), NOW());



-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: pokedex_db
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pokemons`
--

DROP TABLE IF EXISTS `pokemons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pokemons` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `RegionId` int NOT NULL,
  `TypeId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `RegionId` (`RegionId`),
  KEY `TypeId` (`TypeId`),
  CONSTRAINT `pokemons_ibfk_1` FOREIGN KEY (`RegionId`) REFERENCES `regions` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `pokemons_ibfk_2` FOREIGN KEY (`TypeId`) REFERENCES `types` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pokemons`
--

LOCK TABLES `pokemons` WRITE;
/*!40000 ALTER TABLE `pokemons` DISABLE KEYS */;
INSERT INTO `pokemons` VALUES (2,'Lucario','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0V4WqW7ZqJl_aXcmCC_BmGLdhQMn6khV8IqvZyjq7AYFoZTP9dDAwVbPmsOP7j_FOkQM&usqp=CAU','2025-07-17 02:49:32','2025-07-17 02:59:59',6,10);
/*!40000 ALTER TABLE `pokemons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `regions`
--

DROP TABLE IF EXISTS `regions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `regions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `regions`
--

LOCK TABLES `regions` WRITE;
/*!40000 ALTER TABLE `regions` DISABLE KEYS */;
INSERT INTO `regions` VALUES (3,'Kanto','2025-07-16 23:49:13','2025-07-16 23:49:13'),(4,'Johto','2025-07-16 23:49:21','2025-07-16 23:49:21'),(5,'Hoenn','2025-07-16 23:49:29','2025-07-16 23:49:29'),(6,'Sinnoh','2025-07-16 23:49:38','2025-07-16 23:49:38'),(7,'Teselia','2025-07-16 23:49:48','2025-07-16 23:49:48'),(8,'Kalos','2025-07-16 23:52:07','2025-07-16 23:52:07'),(9,'Alola','2025-07-16 23:52:16','2025-07-16 23:52:16'),(10,'Galar','2025-07-16 23:52:23','2025-07-16 23:52:23'),(11,'Paldea','2025-07-16 23:52:30','2025-07-16 23:52:30');
/*!40000 ALTER TABLE `regions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `types`
--

DROP TABLE IF EXISTS `types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,'Acero','2025-07-16 23:52:53','2025-07-16 23:52:53'),(2,'Agua','2025-07-16 23:53:01','2025-07-16 23:53:01'),(3,'Bicho','2025-07-16 23:53:07','2025-07-16 23:53:07'),(4,'Dragón','2025-07-16 23:53:13','2025-07-16 23:53:13'),(5,'Eléctrico','2025-07-16 23:53:18','2025-07-16 23:53:18'),(6,'Fantasma','2025-07-16 23:53:24','2025-07-16 23:53:24'),(7,'Fuego','2025-07-16 23:53:30','2025-07-16 23:53:30'),(8,'Hada','2025-07-16 23:53:36','2025-07-16 23:53:36'),(9,'Hielo','2025-07-16 23:53:42','2025-07-16 23:53:42'),(10,'Lucha','2025-07-16 23:53:46','2025-07-16 23:53:46'),(11,'Normal','2025-07-16 23:53:53','2025-07-16 23:53:53'),(12,'Planta','2025-07-16 23:53:59','2025-07-16 23:53:59'),(13,'Psíquico','2025-07-16 23:54:06','2025-07-16 23:54:06'),(14,'Roca','2025-07-16 23:54:11','2025-07-16 23:54:11'),(15,'Siniestro','2025-07-16 23:54:18','2025-07-16 23:54:18'),(16,'Tierra','2025-07-16 23:54:25','2025-07-16 23:54:25'),(17,'Veneno','2025-07-16 23:54:30','2025-07-16 23:54:30'),(18,'Volador','2025-07-16 23:54:36','2025-07-16 23:54:36');
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'pokedex_db'
--

--
-- Dumping routines for database 'pokedex_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-16 23:48:23

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

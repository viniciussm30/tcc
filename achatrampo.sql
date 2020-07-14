-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           5.6.34 - MySQL Community Server (GPL)
-- OS do Servidor:               Win32
-- HeidiSQL Versão:              11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para achatrampo
CREATE DATABASE IF NOT EXISTS `achatrampo` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `achatrampo`;

-- Copiando estrutura para tabela achatrampo.cliente
CREATE TABLE IF NOT EXISTS `cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `dataNascimento` date NOT NULL,
  `endereco` varchar(250) NOT NULL,
  `numeroEndereco` varchar(100) NOT NULL,
  `bairroEndereco` varchar(80) NOT NULL,
  `complementoEndereco` varchar(80) DEFAULT NULL,
  `cepEndereco` varchar(30) NOT NULL,
  `cidadeEndereco` varchar(150) NOT NULL,
  `estadoEndereco` varchar(10) NOT NULL,
  `whatsapp` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela achatrampo.cliente: ~7 rows (aproximadamente)
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` (`id`, `nome`, `dataNascimento`, `endereco`, `numeroEndereco`, `bairroEndereco`, `complementoEndereco`, `cepEndereco`, `cidadeEndereco`, `estadoEndereco`, `whatsapp`) VALUES
	(50, 'Gaby Silva', '1997-03-18', 'Rua Presidente Abraão Lincoln', '4444', 'Itaberaba', 'Casa', '48907682', 'Juazeiro', 'Bahia', '74715704398');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;

-- Copiando estrutura para tabela achatrampo.trabalhador
CREATE TABLE IF NOT EXISTS `trabalhador` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nomeCompleto` varchar(200) NOT NULL,
  `apelido` varchar(100) DEFAULT NULL,
  `dataNascimento` date NOT NULL,
  `cpf` varchar(16) NOT NULL,
  `atuacao` varchar(50) NOT NULL,
  `cidade` varchar(150) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `whatsapp` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cpf` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=158 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela achatrampo.trabalhador: ~17 rows (aproximadamente)
/*!40000 ALTER TABLE `trabalhador` DISABLE KEYS */;
INSERT INTO `trabalhador` (`id`, `nomeCompleto`, `apelido`, `dataNascimento`, `cpf`, `atuacao`, `cidade`, `estado`, `whatsapp`) VALUES
	(157, 'José Alfredo', 'josé', '1992-07-20', '78973538004', 'Eletricista', 'Goiânia', 'Goiás', '62323510607');
/*!40000 ALTER TABLE `trabalhador` ENABLE KEYS */;

-- Copiando estrutura para tabela achatrampo.trabalhospublicados
CREATE TABLE IF NOT EXISTS `trabalhospublicados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) NOT NULL,
  `prazo` date DEFAULT NULL,
  `atuacao` varchar(150) NOT NULL,
  `descricao` varchar(500) NOT NULL,
  `idCliente` int(11) NOT NULL,
  `idTrabalhador` int(11) DEFAULT NULL,
  `avaliacao` int(11) DEFAULT '0' COMMENT '1 = Péssimo; 2 = Muito Ruim; 3 = Regular; 4 = Bom; 5 = Muito Bom',
  PRIMARY KEY (`id`),
  KEY `FK_trabalhospublicados_cliente` (`idCliente`),
  KEY `FK_trabalhospublicados_trabalhador` (`idTrabalhador`),
  CONSTRAINT `FK_trabalhospublicados_cliente` FOREIGN KEY (`idCliente`) REFERENCES `cliente` (`id`),
  CONSTRAINT `FK_trabalhospublicados_trabalhador` FOREIGN KEY (`idTrabalhador`) REFERENCES `trabalhador` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela achatrampo.trabalhospublicados: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `trabalhospublicados` DISABLE KEYS */;
INSERT INTO `trabalhospublicados` (`id`, `titulo`, `prazo`, `atuacao`, `descricao`, `idCliente`, `idTrabalhador`, `avaliacao`) VALUES
	(21, 'Cuidar do meu filho a noite', '2020-07-18', 'Babá', 'Preciso de um(a) babá para cuidar do meu filho durante a noite inteira pois terei um compromisso. URGENTE', 50, NULL, 5),
	(22, 'Minha tomada queimou, preciso de concerto', '2020-07-15', 'Eletricista', 'Preciso de um eletricista para concertar minha tomada urgente', 50, NULL, 0);
/*!40000 ALTER TABLE `trabalhospublicados` ENABLE KEYS */;

-- Copiando estrutura para tabela achatrampo.usuario
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(300) NOT NULL,
  `senha` varchar(16) NOT NULL,
  `idTrabalhador` int(11) DEFAULT NULL,
  `idCliente` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `FK_usuario_cliente` (`idCliente`),
  KEY `FK__trabalhador` (`idTrabalhador`) USING BTREE,
  CONSTRAINT `FK_usuario_cliente` FOREIGN KEY (`idCliente`) REFERENCES `cliente` (`id`),
  CONSTRAINT `FK_usuario_trabalhador` FOREIGN KEY (`idTrabalhador`) REFERENCES `trabalhador` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=174 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela achatrampo.usuario: ~14 rows (aproximadamente)
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` (`id`, `email`, `senha`, `idTrabalhador`, `idCliente`) VALUES
	(172, 'jsalfredo2007@gmail.com.br', 'jose123', 157, NULL),
	(173, 'gabys1803@gmail.com.br', 'gaby123', NULL, 50);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

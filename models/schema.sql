CREATE TABLE `pipetype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `PipeType` varchar(50) DEFAULT NULL,
  `Density` float DEFAULT NULL,
  `YoungsModulus` float DEFAULT NULL,
  `ListName` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) 

CREATE TABLE `spe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Description` varchar(50) DEFAULT NULL,
  `NorminalSize` float DEFAULT NULL,
  `PipeId` float DEFAULT NULL,
  `NorminalWt` float DEFAULT NULL,
  `AdjustWt` float DEFAULT NULL,
  `Grad` varchar(25) DEFAULT NULL,
  `Upset` varchar(25) DEFAULT NULL,
  `Thread` varchar(25) DEFAULT NULL,
  `Yield` float DEFAULT NULL,
  `ToolJointOd` float DEFAULT NULL,
  `ToolJointId` float DEFAULT NULL,
  `TensionBody` float DEFAULT NULL,
  `TensionJoint` float DEFAULT NULL,
  `TorsionBody` float DEFAULT NULL,
  `TorsionJoint` float DEFAULT NULL,
  `MakeupTorque` float DEFAULT NULL,
  PRIMARY KEY (`id`)
)
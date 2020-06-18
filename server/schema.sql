CREATE DATABASE chat;

USE chat;

CREATE TABLE `users`(
  `id` INT AUTO_INCREMENT,
  `name` VARCHAR(100),
  PRIMARY KEY(`id`)
);

CREATE TABLE `messages`(
  `id` INT AUTO_INCREMENT,
  `text` TEXT,
  `user_id` INT,
  PRIMARY KEY(id)
);

CREATE TABLE `rooms`(
  `id` INT AUTO_INCREMENT,
  `name` VARCHAR(100),
  `message_id` INT,
  PRIMARY KEY(id)
);

CREATE TABLE `friends`(
  `id` INT AUTO_INCREMENT,
  `user_id` INT,
  `friend_id` INT,
  PRIMARY KEY(id)
);

-- Create Foreign Keys
ALTER TABLE `messages` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `friends` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `friends` ADD FOREIGN KEY (friend_id) REFERENCES `users` (`id`);
ALTER TABLE `rooms` ADD FOREIGN KEY (message_id) REFERENCES `messages` (`id`);





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


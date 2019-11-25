-- CREATE DATABASE SCRIPT ------------------------------------------------

-- INSTRUCTIONS
-- Open this SQL file in MySQL Workbench
-- Select Ctrl+A to select all
-- Click the lightning icon to run the selection
-- Right click in the directory tab and select refresh to view changes
-- The new database with relevant tables should be visible
-- If there are any issues, please contact me 
-- Callum McFadgen


-- CLEAR EXISTING DATABASE
 DROP DATABASE IF EXISTS gvc_db; 
 
-- CREATE NEW DATABASE
CREATE DATABASE gvc_db;

-- USE NEW DATABASE
USE gvc_db;

-- CREATE TABLES
DROP PROCEDURE IF EXISTS CreateTables;
DELIMITER //
CREATE PROCEDURE CreateTables()
BEGIN 


    CREATE TABLE users
    (
		user_id	INT(10) NOT NULL AUTO_INCREMENT,
		user_first_name CHAR(50),
		user_last_name CHAR(50),
		user_password CHAR(50),
		user_email CHAR(50),
        user_admin_status BOOL DEFAULT FALSE,
        PRIMARY KEY (user_id)
    );
    
		CREATE TABLE menu_items
	(
		menu_item_id INT(10) NOT NULL AUTO_INCREMENT,
		menu_item_name CHAR(50),
		menu_item_description CHAR(255),
		menu_item_price DEC(13, 4),
		menu_item_available BOOL DEFAULT FALSE,
		menu_item_gluten_free BOOL DEFAULT FALSE,
		menu_item_vegan BOOL DEFAULT FALSE,
		menu_item_breakfast BOOL DEFAULT FALSE,
		menu_item_lunch BOOL DEFAULT FALSE,
		menu_item_dinner BOOL DEFAULT FALSE,
		menu_item_function BOOL DEFAULT FALSE,
		user_id INT(10) NOT NULL ,
		PRIMARY KEY (menu_item_id),
		FOREIGN KEY (user_id) REFERENCES users(user_id)  ON DELETE CASCADE ON UPDATE CASCADE
	);

	CREATE TABLE item_reviews
	(
		item_review_id INT(10) NOT NULL AUTO_INCREMENT,
		item_review_reviewer_name CHAR(50),
		item_review_review	CHAR(255),
		item_review_breakfast BOOL DEFAULT FALSE,
		item_review_lunch BOOL DEFAULT FALSE,
		item_review_dinner BOOL DEFAULT FALSE ,
		item_review_function BOOL DEFAULT FALSE,
		menu_item_id INT(10),
		user_id INT(10) NOT NULL,
		PRIMARY KEY (item_review_id),
		FOREIGN KEY (menu_item_id) REFERENCES menu_items(menu_item_id)  ON DELETE CASCADE ON UPDATE CASCADE,
		FOREIGN KEY (user_id) REFERENCES users(user_id)  ON DELETE CASCADE ON UPDATE CASCADE
	);

	CREATE TABLE events
	(
		event_id INT(10) NOT NULL AUTO_INCREMENT,
		event_name CHAR(50),
		event_date_time DATETIME,
		event_description CHAR(255),
		event_price DECIMAL(13, 4),
		event_seating BOOL DEFAULT FALSE,
		event_seats_available INT(4),
		event_space_avalibile INT(4),
		event_day BOOL DEFAULT FALSE,
		event_night BOOL DEFAULT FALSE,
        event_spring BOOL DEFAULT FALSE,
        event_summer BOOL DEFAULT FALSE,
        event_autumn BOOL DEFAULT FALSE,
        event_winter BOOL DEFAULT FALSE,
		user_id INT(10) NOT NULL,
		PRIMARY KEY (event_id),
		FOREIGN KEY (user_id) REFERENCES users(user_id)  ON DELETE CASCADE ON UPDATE CASCADE
	);

	CREATE TABLE event_reviews
	(
		event_review_id	INT(10) NOT NULL AUTO_INCREMENT,
		event_review_reviewer_name CHAR(50),
		event_review_review CHAR(255),
		event_review_day BOOL DEFAULT FALSE,
		event_review_night BOOL DEFAULT FALSE,
		event_id INT(10),
		user_id INT(10) NOT NULL,
		PRIMARY KEY (event_review_id),
		FOREIGN KEY (event_id) REFERENCES events (event_id)  ON DELETE CASCADE ON UPDATE CASCADE, 	
		FOREIGN KEY (user_id) REFERENCES users(user_id)  ON DELETE CASCADE ON UPDATE CASCADE
	); 
    
END//
DELIMITER ;

CALL CreateTables();


-- CREATE TEST DATA
DROP PROCEDURE IF EXISTS PopulateTables;
DELIMITER //
CREATE PROCEDURE PopulateTables()
BEGIN 

	-- ADMIN
	INSERT INTO users (user_first_name, user_last_name, user_password, user_email, user_admin_status)
	VALUES ('Callum', 'McFadgen','P@ssword1', 'Callum-McFadgen@live.nmit.ac.nz', true);


	-- MENU_ITEMS
	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES ('Toasted Muesli', 'Homemade toasted muesli with fresh fruit, yogurt and milk', 15.00, true, true, true, true, false, false, false, 1);

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES ('Porridge', 'Organic oats served with brown sugar, cream and served with fresh fruit', 15.00, true, false, true, true, false, false, false, 1);

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES ('Pancakes','Served with caramelised bananas, cured bacon, mascarpone vanilla cream & maple syrup', 15.00, true, true, false, true, false, false, false, 1);

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES ('French Toast','Served with fresh fruit salad, berry compote & mascarpone vanilla cream', 15.00, true, false, false, true, false, false, false, 1);

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES ('Toasted Bagel', 'Fresh toasted bagel with cream chesse and homemade pesto', 12.00, true, false, true, true, false, false, false, 1);

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES ('Eggs Benedict', 'Free range eggs, english muffin, finished with house-made hollandaise', 18.00, true, true, false, true, false, false, false, 1);

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES ('Bacon & Eggs', 'Streaky Manuka smoked Bacon, free range egss, served with fresh sourdough bread', 20.00, true, true, false, true, false, false, false, 1);

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES ('Vegeterian Breakfast', 'Free range eggs, grilled tomato, grilled mushroom, hashbrowns and wilted spinach', 18.00, true, true, true, true, false, false, false, 1);

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES ('Roast Vegetable Salad', 'A range of seasonal produce, roasted with a balsamic glaze and served with fresh salad greens', 15.00, true, true, true, false, true, false, false, 1);

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES ('Roast Lamb Salad', 'Local free range lamb, roasted with a mint dressing and served with salad greens', 18.00, true, true, false, false, true, false, false, 1);

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES ('Fish & Chips', 'Fresh fish fried in a beer batter and served with homemade chunky fries and Aioli', 20.00, true, true, false, false, true, false, false, 1);

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES ('Vegeterian Pie', 'Homemade wholemeal pastry packed full of curried vegtables and served with a tomato relish', 15.00, true, false, true, false, true, false, false, 1);

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES ('Soup of the Day', 'Ask one of our staff about todays flavour', 12.00, true, true, false, false, true, false, false, 1);

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES ('Seafood Chowder', 'Creamy chowder full of fresh fish, scallops and mussels, served with fresh sourdough bread', 16.00, true, false, false, false, true, false, false, 1);

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES ('Steak Sandwich', 'Ribeye steak, swiss chesse, caramelised onion, beetroot chutney, served on fresh sourdough bread', 20.00, true, true, false, false, true, false, false, 1);

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES ('Nachos', 'Organic corn chips, fresh salasa, refried beans, served with sour cream', 15.00, true, true, false, false, true, false, true, 1);

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES ('Wedges', 'Homemade chunky wedges, grilled cheese and bacon bits, served with sour cream', 15.00, true, true, true, false, true, false, true, 1);

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES('Halloumi Salad', 'Grilled local halloumi, julienne vegetables, served with salad greens', 20.00, true, true, false, false, false, true, false, 1 );

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES('Steak Fillet', 'Pure angus beef sirloin served with roasted potatoes and seasonal vegetables', 30.00, true, true, false, false, false, true, false, 1);

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES('Vegetarian Burger', 'Flavoursome chickpea patties, served on a sourdough bun with salad greens and homemade fries', 25.00, true, true, true, false, false, true, false, 1);

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES('Chicken Taco', 'Marinated chicken thighs, served with fresh avocado and a delicious spicy salsa', 25.00, true, true, false, false, false, true, false, 1);

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES('Fish Fillet', 'Fresh Blue Cod fillets, coated with Panko crumbs and served with salad greens and roast potatoes ', 28.00, true, true, false, false, false, true, false, 1);

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES('Seafood Fettuccine', 'Handmade pasta tossed with alfredo sauce and full of fresh seafood and served with crust sourdough bread', 25.00, true, false, false, false, false, true, false, 1);

	INSERT INTO menu_items (menu_Item_name, menu_item_description, menu_item_price, menu_item_available, menu_item_gluten_free, menu_item_vegan, menu_item_breakfast, menu_item_lunch, menu_item_dinner, menu_item_function, user_id)
	VALUES ('Roast Chicken Salad', 'Glazed and roasted chicken served with salad greens, herbed croutons and Parmesan ', 25.00, true, true, false, false, false, true, false, 1);


	-- ITEM_REVIEWS
	INSERT INTO item_reviews (item_review_reviewer_name, item_review_review, item_review_breakfast, item_review_lunch, item_review_dinner, item_review_function, menu_item_id, user_id)
	VALUES ('Corrina Busby', 'I come to the Garden View every weekend for the amazing breakfasts. I love their Eggs Benedict with the Manuka smoked bacon covered in Hollandaise Sauce, Yum! ', true, false, false, false, 6, 1);
    
	INSERT INTO item_reviews (item_review_reviewer_name, item_review_review, item_review_breakfast, item_review_lunch, item_review_dinner, item_review_function, menu_item_id, user_id)
	VALUES ('Reviewer Two', 'review two', true, false, false, false, 2, 1);
    
	INSERT INTO item_reviews (item_review_reviewer_name, item_review_review, item_review_breakfast, item_review_lunch, item_review_dinner, item_review_function, menu_item_id, user_id)
	VALUES ('Reviewer Three', 'review three', true, false, false, false, 3, 1);
    
	INSERT INTO item_reviews (item_review_reviewer_name, item_review_review, item_review_breakfast, item_review_lunch, item_review_dinner, item_review_function, menu_item_id, user_id)
	VALUES ('Reviewer Four', 'review four', true, false, false, false, 4, 1);
    
	INSERT INTO item_reviews (item_review_reviewer_name, item_review_review, item_review_breakfast, item_review_lunch, item_review_dinner, item_review_function, menu_item_id, user_id)
	VALUES ('Reviewer Five', 'review five', true, false, false, false, 5, 1);
    
    
    -- EVENTS
	INSERT INTO events (event_name, event_date_time, event_description, event_price, event_seating, event_seats_available, event_space_avalibile, event_day, event_night, event_spring, event_summer, event_autumn, event_winter, user_id)
	VALUES ('Cover Me', '2019-09-03 19:30:00', 'They’re a collaboration of NZ’s finest musicians who have found themselves living in Nelson. Delivering a high energy performance with their mix of funk, soul, jazz, dance, RnB and rock influences', 35.00, true, 15, 30, false, true, true, false, false, false, 1); 	-- spring
    
    INSERT INTO events (event_name, event_date_time, event_description, event_price, event_seating, event_seats_available, event_space_avalibile, event_day, event_night, event_spring, event_summer, event_autumn, event_winter, user_id)
	VALUES('The Voice Collective', '2019-09-19 17:30:00', 'Everyone is invited to join the pop-up singing group the Voice Collective for a night. Led by local musicians, this is a safe space to sing your heart out.', 2.00, false, 0, 50, true, false, true, false, false, false, 1);	-- spring

	INSERT INTO events (event_name, event_date_time, event_description, event_price, event_seating, event_seats_available, event_space_avalibile, event_day, event_night, event_spring, event_summer, event_autumn, event_winter, user_id)
	VALUES('Caravãna Sun', '2019-10-16 20:00:00', 'These raucous and rebellious surf-rockers bring their blend of indie-surf-rock meets gypsy-ska to Nelson  We guarantee Caravãna Sun will have you grooving to your very core.', 30.00, false, 0, 50, false, true, true, false, false, false, 1);		-- spring
    
    INSERT INTO events (event_name, event_date_time, event_description, event_price, event_seating, event_seats_available, event_space_avalibile, event_day, event_night, event_spring, event_summer, event_autumn, event_winter, user_id)
	VALUES('Dayna Sanerivi', '2019-11-18 13:00:00', 'Original compositions by gifted singer/songwriter Dayna Sanerivi with Darrin Andrews on captivating guitar. A perfect celebration of stirring songs to melt your heart. Expect to be wowed.', 22.00, true, 40, 0, true, false, true, false, false, false, 1);		-- spring

	INSERT INTO events (event_name, event_date_time, event_description, event_price, event_seating, event_seats_available, event_space_avalibile, event_day, event_night, event_spring, event_summer, event_autumn, event_winter, user_id)
	VALUES('Dust & Gold', '2019-12-12 20:00:00', 'Nikita Fountain’s beautiful songbird voice and Mark McKenzie’s rich baritone blend over a accompaniment of original material. Their songs range from Celtic ballads, to foot-tapping bluegrass tunes.', 35.00, true, 40, 0, false, true, false, true, false, false, 1);		-- summer

	INSERT INTO events (event_name, event_date_time, event_description, event_price, event_seating, event_seats_available, event_space_avalibile, event_day, event_night, event_spring, event_summer, event_autumn, event_winter, user_id)
	VALUES('Sun City Soul', '2019-12-22 20:30:00', 'Tapping into Motown and complete with a funked-up horn section, Sun City Soul will deliver a high energy show that is guaranteed to get you moving and singing along with the six-piece soul band.', 32.00, false, 0, 50, false, true, false, true, false, false, 1);		-- summer

	INSERT INTO events (event_name, event_date_time, event_description, event_price, event_seating, event_seats_available, event_space_avalibile, event_day, event_night, event_spring, event_summer, event_autumn, event_winter, user_id)
	VALUES('Rabbit Hōle', '2020-01-02 13:30:00', 'Rabbit Hōle is the collaboration of multi-instrumentalist and singer Sahn Bishop, drummer Bruce McGregor and saxophonist Simon Williams.  To produce music thats slightly dubby, with a funk-esque twist and buckets of soul.', 18.00, true, 15, 30, true, false, false, true, false, false, 1);	-- summer

	INSERT INTO events (event_name, event_date_time, event_description, event_price, event_seating, event_seats_available, event_space_avalibile, event_day, event_night, event_spring, event_summer, event_autumn, event_winter, user_id)
	VALUES('Tami Neilson', '2020-02-17 19:30:00', 'This is a rare opportunity to experience Canadian-born New Zealand singer-songwriter Tami Neilson up-close and personal in an acoustic show, accompanied by her brother and longtime co-writer/collaborator Jay Neilson.', 40.00, true, 15, 30, false, true, false, true, false, false, 1);		-- summer

	INSERT INTO events (event_name, event_date_time, event_description, event_price, event_seating, event_seats_available, event_space_avalibile, event_day, event_night, event_spring, event_summer, event_autumn, event_winter, user_id)
	VALUES('Medicine Woman', '2020-03-15 20:00:00', 'A serving of blues inspired toe-tapping, full vocal harmony, rock originals with lyrics that provoke, inspire, and reach into your soul. Three years in the making, they’ll be sharing the medicine that is their debut album – "Head, Heart & Gut".', 32.00, true, 15, 30, false, true, false, false, true, false, 1);	-- autumn

	INSERT INTO events (event_name, event_date_time, event_description, event_price, event_seating, event_seats_available, event_space_avalibile, event_day, event_night, event_spring, event_summer, event_autumn, event_winter, user_id)
	VALUES('Greg Copeland', '2020-04-21 19:30:00', 'Heavily influenced by the likes of James Brown, Wilson Pickett, Robert Johnson and Howlin´ Wolf, Copeland to develop his own unique style, infusing the Blues with elements of Soul and Funk.', 40.00, true, 15, 30, false, true, false, false, true, false, 1);	-- autumn

	INSERT INTO events (event_name, event_date_time, event_description, event_price, event_seating, event_seats_available, event_space_avalibile, event_day, event_night, event_spring, event_summer, event_autumn, event_winter, user_id)
	VALUES('Elisha Hobbs', '2020-05-10 14:30:00', 'Let yourself be transported by this uniquely engaging and dynamic local talent hailing from Motueka, as the multi-instrumentalist and songwriter performs a collection original music.', 15.00, true, 40, 0, true, false, false, false, true, false, 1);		-- autumn

	INSERT INTO events (event_name, event_date_time, event_description, event_price, event_seating, event_seats_available, event_space_avalibile, event_day, event_night, event_spring, event_summer, event_autumn, event_winter, user_id)
	VALUES('Skyscraper Stan', '2020-06-22 20:30:00', 'Stan Woodhouse is a singer songwriter lauded for his observational lyricism delivered in a smooth and versatile baritone. Together with his touring band The Commission Flats, one of Melbourne’s most dynamic live acts.', 35.00, true, 15, 30, false, true, false, false, false, true, 1);

	INSERT INTO events (event_name, event_date_time, event_description, event_price, event_seating, event_seats_available, event_space_avalibile, event_day, event_night, event_spring, event_summer, event_autumn, event_winter, user_id)
	VALUES('We Three', '2020-07-19 18:30:00', 'Ease into the evening with the amazing voice and keys of Trudi Wilson, the saxophone of Simon ‘Saxman’ Williams, and the skin-beating of Bruce McGregor – bringing you tunes from Aretha to Prince and back again.', 28.00, true, 15, 30, false, true, false, false, false, true, 1);

	INSERT INTO events (event_name, event_date_time, event_description, event_price, event_seating, event_seats_available, event_space_avalibile, event_day, event_night, event_spring, event_summer, event_autumn, event_winter, user_id)
	VALUES('The Hermsen Family Band', '2020-08-21 20:00:00', 'Nelson’s own Hermsen family is synonymous with locally produced, quality grassroots music, that has has been described as vibrant, soulful and honest.', 36.00, true, 15, 30, false, true, false, false, false, true, 1);


	-- EVENT_REVIEWS
	INSERT INTO event_reviews (event_review_reviewer_name, event_review_review, event_review_day, event_review_night, event_id, user_id)
	VALUES ('Reviewer One', 'review one', false, true, 1, 1);
    
	INSERT INTO event_reviews (event_review_reviewer_name, event_review_review, event_review_day, event_review_night, event_id, user_id)
	VALUES ('Reviewer Two', 'review two', false, true, 2, 1);
    
    INSERT INTO event_reviews (event_review_reviewer_name, event_review_review, event_review_day, event_review_night, event_id, user_id)
	VALUES ('Reviewer Three', 'review three', false, true, 3, 1);
    
    INSERT INTO event_reviews (event_review_reviewer_name, event_review_review, event_review_day, event_review_night, event_id, user_id)
	VALUES ('Reviewer Four', 'review four', false, true, 4, 1);
    
	INSERT INTO event_reviews (event_review_reviewer_name, event_review_review, event_review_day, event_review_night, event_id, user_id)
	VALUES ('Reviewer Five', 'review five', false, true, 5, 1);

END//
DELIMITER ;

CALL PopulateTables();
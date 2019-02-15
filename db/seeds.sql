create table messages
(
    message_id serial primary key,
    message text
)


insert into messages
(message)
values ('Hello everyone!'),
       ('Happy Valentines Day!');
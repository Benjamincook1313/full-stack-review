insert into messages
(message)
values ($1);

select *
from messages
order by message_id asc;
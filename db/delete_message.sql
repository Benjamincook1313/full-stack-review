delete from messages
where message_id = $1;

select * from messages
order by message_id asc;
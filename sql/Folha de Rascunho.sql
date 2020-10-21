SELECT count(*)
from public.candidato;



select faixa, count(q006) as total
from candidato
left join rendafamiliar on id=q006
group by faixa, q006
order by total desc;
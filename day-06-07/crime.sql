select * from crime_scene_report where city = 'SQL City' AND type = 'murder' And date='20180115'
select * from person where address_street_name = 'Northwestern Dr' order by address_number desc limit 1
select * from person where address_street_name = 'Franklin Ave' AND name LIKE "%Annabel%"
#(id:14887,16371)
select * from interview where person_id IN(14887,16371)
#clues:gym num:48z% car plate h42w
#was on gym jan 9 2018
select * from get_fit_now_member as m 
inner join get_fit_now_check_in as c 
on c.membership_id = m.id
inner join person p on p.id = m.person_id
inner join drivers_license as dl on dl.id = p.license_id
where m.id LIKE '48z%' and c.check_in_date = '20180109' and dl.plate_number LIKE "%h42w%"

KIllER :JEREMY BOWERS
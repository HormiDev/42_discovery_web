cont=1
while [ $# -ge $cont ]
do
    mkdir "ex${!cont}"
    cont=$((cont+1))
done
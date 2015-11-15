java -Dserver.port=80 -Dspring.profiles.active=prod -jar target/pitta.jar > out.log 2>&1 &
echo $! > pid.file

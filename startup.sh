mvn spring-boot:run -Dserver.port=80 > out.log 2>&1 &
echo $! > pid.file

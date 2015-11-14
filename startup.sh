java -Dserver.port=80 -jar target/pitta.jar > out.log 2>&1 &
echo $! > pid.file

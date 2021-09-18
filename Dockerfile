FROM openjdk:8
EXPOSE 8080
ADD target/Grocery-Store-final.jar Grocery-Store-final.jar
ENTRYPOINT ["java","-jar","/Grocery-Store-final.jar"]
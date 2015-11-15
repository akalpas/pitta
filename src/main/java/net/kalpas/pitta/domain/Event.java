package net.kalpas.pitta.domain;

import org.springframework.data.annotation.Id;

public class Event {
    @Id
    public Long id;
    public String name;
    public String screenName;
    public Integer isClosed;
    public String type;
    public Integer isAdmin;
    public Integer isMember;
    public String description;
    public Place place;
    public Integer startDate;
    public String photo50;
    public String photo100;
    public String photo200;
}

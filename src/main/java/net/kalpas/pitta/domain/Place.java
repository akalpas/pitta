package net.kalpas.pitta.domain;

import org.springframework.data.annotation.Id;

public class Place {
    @Id
    public Long id;
    public String title;
    public Double latitude;
    public Double longitude;
    public Integer created;
    public String icon;
    public Integer groupId;
    public String groupPhoto;
    public Integer checkins;
    public Integer type;
    public Integer country;
    public Integer city;
    public String address;
}

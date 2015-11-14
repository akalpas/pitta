package net.kalpas.pitta.web.controller.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @RequestMapping(method = RequestMethod.GET, value = "/events", produces = "application/json")
    public String getEvents() {
        return "[{\"id\":104589521,\"name\":\"ONUKA | 28.11 | Харьков | Мисто\",\"screen_name\":\"onuka_hkv2015\",\"is_closed\":0,\"type\":\"event\",\"is_admin\":0,\"is_member\":1,\"description\":\"\",\"place\":{\"id\":13123716,\"title\":\"ONUKA | 28.11 | Харьков | Мисто\",\"latitude\":49.993499,\"longitude\":36.230376,\"created\":1444838800,\"icon\":\"https://vk.com/images/places/place.png\",\"group_id\":104589521,\"group_photo\":\"https://pp.vk.me/c621717/v621717396/47119/bBPDi7FdNPA.jpg\",\"checkins\":0,\"type\":21,\"country\":2,\"city\":280,\"address\":\"Клуб Мисто\"},\"start_date\":1448740800,\"photo_50\":\"https://pp.vk.me/c621717/v621717396/47119/bBPDi7FdNPA.jpg\",\"photo_100\":\"https://pp.vk.me/c621717/v621717396/47118/vqzReccdJzU.jpg\",\"photo_200\":\"https://pp.vk.me/c621717/v621717396/47117/8vTjrtVTM8Y.jpg\"},{\"id\":104589521,\"name\":\"ONUKA | 28.11 | Харьков | Мисто\",\"screen_name\":\"onuka_hkv2015\",\"is_closed\":0,\"type\":\"event\",\"is_admin\":0,\"is_member\":1,\"description\":\"\",\"place\":{\"id\":13123716,\"title\":\"ONUKA | 28.11 | Харьков | Мисто\",\"latitude\":49.993499,\"longitude\":36.230376,\"created\":1444838800,\"icon\":\"https://vk.com/images/places/place.png\",\"group_id\":104589521,\"group_photo\":\"https://pp.vk.me/c621717/v621717396/47119/bBPDi7FdNPA.jpg\",\"checkins\":0,\"type\":21,\"country\":2,\"city\":280,\"address\":\"Клуб Мисто\"},\"start_date\":1448740800,\"photo_50\":\"https://pp.vk.me/c621717/v621717396/47119/bBPDi7FdNPA.jpg\",\"photo_100\":\"https://pp.vk.me/c621717/v621717396/47118/vqzReccdJzU.jpg\",\"photo_200\":\"https://pp.vk.me/c621717/v621717396/47117/8vTjrtVTM8Y.jpg\"}]";
    }
}

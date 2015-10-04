package demo.item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Jana on 10/3/2015.
 */

@RestController
@RequestMapping(value = "/items")
public class ItemController {

@Autowired
private ItemRepository itemRepo;

    @RequestMapping(method = RequestMethod.GET)
    public List findItems() {
        return itemRepo.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Item getItem(@RequestBody Item user, @PathVariable Integer id) {
        return itemRepo.findOne(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Item addItem(@RequestBody Item item) {
        item.setId(null);
        return itemRepo.saveAndFlush(item);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public Item updateItem(@RequestBody Item updatedItem, @PathVariable Integer id) {
        updatedItem.setId(id);
        return itemRepo.saveAndFlush(updatedItem);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteItem(@PathVariable Integer id) {
        itemRepo.delete(id);
    }
}

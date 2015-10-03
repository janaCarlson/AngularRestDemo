package demo.item;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Jana on 10/3/2015.
 */
public interface ItemRepository extends JpaRepository<Item, Integer> {
}

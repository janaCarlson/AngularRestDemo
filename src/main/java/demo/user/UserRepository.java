package demo.user;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Jana on 10/3/2015.
 */
public interface UserRepository extends JpaRepository<User, Integer> {
}

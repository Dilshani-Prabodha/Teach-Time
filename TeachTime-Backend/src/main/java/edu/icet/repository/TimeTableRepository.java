package edu.icet.repository;

import edu.icet.entity.TimeTableCompositePkEntity;
import edu.icet.entity.TimeTableEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TimeTableRepository extends JpaRepository<TimeTableEntity, TimeTableCompositePkEntity> {

}

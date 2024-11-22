package edu.icet.repository;
import edu.icet.entity.AddTaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddTaskRepository extends JpaRepository<AddTaskEntity, Long> {
    // Custom method to find tasks by teacher ID
    List<AddTaskEntity> findByTeacher_TeacherIdAndDateAndPeriodAndGrade(
            Integer teacherId, String date, Integer period, String grade);

}

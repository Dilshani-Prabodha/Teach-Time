package edu.icet.repository;

import edu.icet.entity.CompletedTaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompletedTaskRepository extends JpaRepository<CompletedTaskEntity, Integer> {
    List<CompletedTaskEntity> findByTeacher_TeacherId(Integer teacherId); // Custom query to get tasks by teacher
}

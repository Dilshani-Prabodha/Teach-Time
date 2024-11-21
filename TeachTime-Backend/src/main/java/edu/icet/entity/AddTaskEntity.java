package edu.icet.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "add_task_management")
public class AddTaskEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long taskId;

    @ManyToOne
    @JoinColumn(name = "teacher_id", referencedColumnName = "teacherId", nullable = false)
    private TeacherEntity teacher;

    @Column(name = "period", nullable = false)
    private Integer period;

    @Column(name = "date", nullable = false)
    private String date;

    @Column(name = "grade", nullable = false)
    private String grade;

    @Column(name = "task", nullable = false)
    private String task;

    @Column(name = "`check`", columnDefinition = "TINYINT(1) DEFAULT 0")
    private Boolean check = false;
}

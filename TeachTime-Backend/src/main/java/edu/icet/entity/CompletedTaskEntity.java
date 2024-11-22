package edu.icet.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "Completed_Task_Management")
public class CompletedTaskEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "com_task_id")
    private Integer comTaskId;

    @Column(name = "period")
    private Integer period;

    @Column(name = "date")
    private String date;

    @Column(name = "grade")
    private String grade;

    @Column(name = "com_task")
    private String comTask;

    @ManyToOne
    @JoinColumn(name = "teacher_id", referencedColumnName = "teacherId")
    private TeacherEntity teacher; // Many tasks can belong to one teacher
}



//Turn on Console insights in Settings to receive AI assistance for understanding and addressing console warnings and errors. Learn more
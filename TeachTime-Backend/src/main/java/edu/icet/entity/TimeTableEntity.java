package edu.icet.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "time_table_info")

public class TimeTableEntity {
    @EmbeddedId
    private TimeTableCompositePkEntity timeTblId;
    private String grade;

    @OneToOne
    @MapsId("teacherId")
    @JoinColumn(name = "teacherId", referencedColumnName = "teacherId")
    private TeacherEntity teacherEntity;
}


package edu.icet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CompletedTask {
    private Integer comTaskId;
    private Integer period;
    private String date;
    private String grade;
    private String comTask;
    private Integer teacherId; // Foreign key to associate with the Teacher
}

SELECT
  `s`.`type` AS `type`,
  avg(`sd`.`value`) AS `average_value`
FROM
  (
    (
      `srs`.`Sensor` `s`
      LEFT JOIN `srs`.`SensorData` `sd` ON((`s`.`id` = `sd`.`fk_sensor`))
    )
    LEFT JOIN `srs`.`Section` `sec` ON((`s`.`fk_section` = `sec`.`id`))
  )
WHERE
  (`s`.`type` IN ('temperature', 'umid'))
GROUP BY
  `s`.`type`
# Generated by Django 5.1.1 on 2024-10-30 21:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotel', '0030_bestroom_review_alter_hotel_rating'),
    ]

    operations = [
        migrations.AddField(
            model_name='bestroom',
            name='rating',
            field=models.CharField(blank=True, choices=[('🌟', '🌟'), ('🌟🌟', '🌟🌟'), ('🌟🌟🌟', '🌟🌟🌟'), ('🌟🌟🌟🌟', '🌟🌟🌟🌟'), ('🌟🌟🌟🌟🌟', '🌟🌟🌟🌟🌟')], max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='hotel',
            name='rating',
            field=models.CharField(choices=[('🌟', '🌟'), ('🌟🌟', '🌟🌟'), ('🌟🌟🌟', '🌟🌟🌟'), ('🌟🌟🌟🌟', '🌟🌟🌟🌟'), ('🌟🌟🌟🌟🌟', '🌟🌟🌟🌟🌟')], max_length=10),
        ),
    ]
